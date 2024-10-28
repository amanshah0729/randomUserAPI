import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

// Import necessary modules for database operations

// Function to generate and save 10 random users
async function generateAndSaveRandomUsers() {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    users.push(user);
    // Save user to your database here
    // Example: await saveUserToDatabase(user);
  }
  console.log('10 random users generated and saved:', users[0]);
  return users;

}

// Call the function to generate and save users

async function getData(): Promise<Payment[]> {
  const users = await generateAndSaveRandomUsers();
  return users.map((user, index) => ({
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
