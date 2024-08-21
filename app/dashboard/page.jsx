import { cookies } from "next/headers";

async function getData() {
    try {
        console.log('token', cookies().get('token').value)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
            // credentials: "include",
            headers: {
                Cookie: `token=${cookies().get('token').value}`,
            },
        });
        const data = await response.json();
        console.log('received response',data)
        if(data.success){
            return 'data success'
        }
        return "error"
    } catch (error) {
        console.log(error)
        return "error"
    }
}

export default async function Dashboard() {

const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      {
        data ? <p>{data}</p> : <p>No data</p>
      }
    </main>
  );
}