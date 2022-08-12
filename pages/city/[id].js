import { useRouter } from 'next/router'

const City = () => {
    const router = useRouter();
    const {id} = router.query

  return (
    <div>
        <h1>Welcome to {id}</h1>
    </div>
  )
}

export default City