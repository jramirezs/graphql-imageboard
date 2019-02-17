const uploadFile = async file => {
  const data = new FormData();

  data.append('upload_preset', 'dev-imageboard');
  data.append('file', file);

  const res = await fetch(
    'https://api.cloudinary.com/v1_1/dwbib4ses/image/upload',
    {
      method: 'POST',
      body: data,
    }
  );

  const result = await res.json();

  return {
    tag: result.public_id.split('/')[1],
    name: `${result.original_filename}.${result.original_extension ||
      result.format}`,
    size: Math.ceil(result.bytes / 1000),
    height: result.height,
    width: result.width,
  };
};

export default uploadFile;
