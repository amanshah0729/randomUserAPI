import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

// Import necessary modules for database operations
import axios from 'axios';

// Function to generate and save 10 random users
async function generateAndSaveRandomUsers() {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const response = await axios.get('https://randomuser.me/api/');
    const user = response.data.results[0];
    users.push(user);
    // Save user to your database here
    // Example: await saveUserToDatabase(user);
  }
  console.log('10 random users generated and saved:', users);
}

// Call the function to generate and save users
generateAndSaveRandomUsers();

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
