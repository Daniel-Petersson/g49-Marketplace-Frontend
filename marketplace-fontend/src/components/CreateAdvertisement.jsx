import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAdvertisement } from "../services/AdvertisementService";

function pageTitle(id) {
  if (id) {
    return <h2 className="text-center">Update advertisement</h2>;
  } else {
    return <h2 className="text-center">Create advertisement</h2>;
  }
}

const CreateAdvertisement = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const id = null; // Replace with actual logic to get the ID if needed

  const saveAdvertisement = (e) => {
    e.preventDefault();
    const advertisement = {
      title,
      description,
      category,
      price: parseFloat(price),
      userDTOForm: {
        email,
        userName,
        password,
      },
    };

    // Basic validation
    if (!title || !description || !category || isNaN(price) || !email || !userName || !password) {
      setError("All fields are required and price must be a number.");
      return;
    }

    createAdvertisement(advertisement)
      .then((response) => {
        console.log(response.data);
        navigate("/userprofile"); // Redirect after successful creation
      })
      .catch((error) => {
        console.error("There was an error creating the advertisement!", error);
        setError("There was an error creating the advertisement!");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle(id)}
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName">Username</label>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  placeholder="Enter Title"
                  name="title"
                  value={title}
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  placeholder="Enter description"
                  name="description"
                  value={description}
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Category:</label>
                <input
                  type="text"
                  placeholder="Enter category"
                  name="category"
                  value={category}
                  className="form-control"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Price:</label>
                <input
                  type="text"
                  placeholder="Enter price"
                  name="price"
                  value={price}
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <button
                className="btn btn-success"
                onClick={saveAdvertisement}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdvertisement;