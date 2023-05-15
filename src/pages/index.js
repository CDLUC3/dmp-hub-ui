import { useRouter } from 'next/router';


function Dashboard() {
  const router = useRouter();

  return (
    <>
      <div id="Dashboard">
        <h2>
          Dashboard
          <button onClick={() => router.push('/plan/add')}>
            Add Plan
          </button>
        </h2>
        <div className="todo">
          <p>Here we want a responsive table component</p>
        </div>

      </div>
    </>
  )
}


export default Dashboard
