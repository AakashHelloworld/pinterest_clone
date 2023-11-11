const handleImageLoad = (imgRef) => {
    //  I am taking the height of the image and dividing it by 10 to get the number of rows it should span
    const imgHeight = imgRef.current.naturalHeight;
    const imgWidth = imgRef.current.naturalWidth;
    const ascpectRatio = imgWidth / imgHeight;
    const realheight = 256 /ascpectRatio
    console.log(realheight, imgHeight)
    const gridRowEnd = 'span ' + Math.ceil(realheight / 10);
    imgRef.current.style.aspectRatio = ascpectRatio;
    imgRef.current.parentNode.style.gridRowEnd = gridRowEnd;
  };

  export default handleImageLoad