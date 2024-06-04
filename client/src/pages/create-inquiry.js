export const CreateInquiry = () => {
  return (
    <div className="create-inquiry">
      <h2>Create Inquiry </h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="number">Number</label>
        <input type="text" id="number" />

        <label htmlFor="email">Email</label>
        <input type="text" id="email" />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" />

        <label htmlFor="typeOfService">Type of Service</label>
        <input type="text" id="typeOfService" />

        <label htmlFor="productType">Product Type</label>
        <input type="text" id="productType" />

        <label htmlFor="brand">Brand</label>
        <input type="text" id="brand" />

        <label htmlFor="age">Age of Product</label>
        <input type="text" id="age" />

        <label htmlFor="imageURL">Image Url</label>
        <input type="text" id="imageURL" />
      </form>
    </div>
  );
};
