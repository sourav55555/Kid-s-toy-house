import Swal from "sweetalert2";

const ModalMytoy = ({ update, index }) => {
  const { _id, price, quantity, Description } = update;
  console.log(index);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const Description = form.Description.value;
    const updateData = { price, quantity, Description };
    console.log(updateData);

    fetch(`https://toy-store-server.onrender.com/mytoys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          Toast.fire({
            icon: "success",
            title: "Update Successful.",
          });
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id={`my-modal-${index}`}
        className="modal-toggle"
      />
      <div className="modal z-50">
        <div className="modal-box w-[30rem] max-w-5xl">

        {/* add my toy section  */}
          <form onSubmit={handleUpdate} className="p-4 space-y-6">

            <div className="space-y-3">
              <label className="block font-semibold" htmlFor="">
                Price
              </label>
              <input
                className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600"
                type="number"
                name="price"
                id=""
                defaultValue={price}
              />
            </div>

            <div className="space-y-3">
              <label className="block font-semibold" htmlFor="">
                Quantity
              </label>
              <input
                className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600"
                type="number"
                name="quantity"
                id=""
                defaultValue={quantity}
              />
            </div>

            <div className="space-y-3">
              <label className="block font-semibold" htmlFor="">
                Description
              </label>
              <textarea
                className="outline-none border-b-2 w-full border-[#0f888f] rounded-xl px-4 py-3 bg-gray-100 placeholder:text-gray-600"
                name="Description"
                defaultValue={Description}
                id=""
                cols="20"
                rows="5"
              ></textarea>
            </div>

            <input
              className="px-8 py-3 cursor-pointer bg-[#13888e] text-white mt-4 mx-auto rounded-lg font-semibold"
              value="Update"
              type="submit"
              name=""
              id=""
            />

          </form>


          <div className="modal-action">
            <label htmlFor={`my-modal-${index}`} className="btn">
              Close
            </label>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ModalMytoy;
