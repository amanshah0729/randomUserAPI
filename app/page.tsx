import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

// Import necessary modules for database operations

// Function to generate and save 10 random users
async function generateAndSaveRandomUsers() {
  const response = await fetch('https://randomuser.me/api/?results=10');
  const data = await response.json();
  const users = data.results;
  // Save users to your database here
  // Example: await saveUserToDatabase(users);
  console.log('10 random users generated and saved:', users[0]);
  return users;
}

// Call the function to generate and save users

// Define a User interface
interface User {
  picture: { large: string };
  name: { first: string; last: string };
  email: string;
}

async function getData(): Promise<Payment[]> {
  const users = await generateAndSaveRandomUsers();
  return users.map((user: User, index: number) => ({
    id: `user-${index}`,
    picture: user.picture['large'],
    status: user.name['first'],
    email: user.email,
    lastName: user.name['last'], // Add this line
  }));
}

export default async function DemoPage() {
  const data = await getData()
  const users = await generateAndSaveRandomUsers();
  console.log(users);
  return (
    
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
