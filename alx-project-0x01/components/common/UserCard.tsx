import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-sm text-gray-500">@{user.username}</p>
      <p className="mt-2 text-gray-700">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Website:</span>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </p>

      <div className="mt-3">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-gray-600">{user.company?.name}</p>
        <p className="italic text-gray-500">“{user.company?.catchPhrase}”</p>
      </div>

      <div className="mt-3">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p className="text-gray-600">
          {user.address?.suite}, {user.address?.street}
        </p>
        <p className="text-gray-600">
          {user.address?.city}, {user.address?.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
