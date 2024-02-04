import { Component,OnInit } from '@angular/core';
import { TrainService } from '../train.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  users: any[] = []; // Assuming you have a users array
    showUpdateForm = false;
    updateUser: any = {};
    userIdToUpdate: number = 0;  // Set this value when the user selects a user to update
showPassword: boolean = false;


constructor(private trainService: TrainService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.trainService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
  deleteUser(id: number) {
    this.trainService.deleteUserById(id).subscribe(
      () => {
        console.log('User deleted successfully');
        // Update the table by refreshing the user list
        this.users = this.users.filter(user => user.id !== id);
      },
      error => {
        console.error('Error deleting user: ', error);
      }
    );
  }
  openUpdateForm(user: any) {
    this.showUpdateForm = true;
    // Assuming user is an object with properties like email, password, number, name
    this.updateUser = { ...user };
    this.userIdToUpdate = user.id; // Assign the user's id to userIdToUpdate
}


// Method to update user details
updateUserDetails() {
  console.log('Updating user details:', this.userIdToUpdate, this.updateUser);
  this.trainService.updateUserById(this.userIdToUpdate, this.updateUser).subscribe(
    response => {
      console.log('User updated successfully:', response);
      this.showUpdateForm = false;  // Close the form after successful update
      // Display an alert message
      alert('User updated successfully!');
      // Re-fetch the user data to re-render the page
      this.trainService.getUsers().subscribe(
        (data: any) => {
          this.users = data;
        },
        error => {
          console.error('Error fetching users:', error);
        }
      );
    },
    error => {
      console.error('Error updating user:', error);
    }
  );
}


updateUserById() {
  this.trainService.updateUserById(this.userIdToUpdate, this.updateUser).subscribe(
    response => {
      console.log('User updated successfully:', response);
      // Additional logic if needed
    },
    error => {
      console.error('Error updating user:', error);
    }
  );
}
  // Inside your component class
togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}
// Change this line
showTickets(userEmail: string): void {
  // Navigate to the "adminshowtickets" route and pass the user's email as a parameter
  this.router.navigate(['/adminshowtickets', userEmail]);
}


}