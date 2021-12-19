function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Avatar"
      className="h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110"
    />
  );
}

export default Avatar;
