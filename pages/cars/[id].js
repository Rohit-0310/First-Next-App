import { useRouter } from 'next/router'


function Car() {
    const router = useRouter()
    const {id} = router.query
    return (
        <>
        <div>

            <h2>Car Name:- {id}</h2>
        </div>
        </>
        )
}

export default Car