import { useSelector } from "react-redux";

const Profile = () => {

    const user = useSelector((state) => state.auth?.user ?? false)
    return (
        <div>
            <h3 className="pb-6 text-2xl text-center text-white"> Profile </h3>
            {user ? <h4 className="text-xl text-center text-white"> Hi, {user}! </h4> : null}
        </div>
    )
}
export default Profile
