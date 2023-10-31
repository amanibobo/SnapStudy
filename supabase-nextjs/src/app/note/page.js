"use client"
import { useState } from 'react';
import axios from 'axios'; // You'll need to install axios
import { createClient } from '@supabase/supabase-js'

const AddNote = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a preview URL for the uploaded image
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  };

  return (
    <>
    <div className="mt-8 max-w-sm mx-auto">
      <label className="block w-full py-2 bg-blue-500 text-white rounded cursor-pointer text-center">
        <span>Select Image</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {imagePreview && (
        <div className="mt-4">
          <img src={imagePreview} alt="Selected Image" className="mx-auto mb-2 max-h-64" />
          <button
            className="w-full py-2 bg-green-500 text-white rounded"
            // onClick={handleUpload}
          >
            Upload Image
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default AddNote;