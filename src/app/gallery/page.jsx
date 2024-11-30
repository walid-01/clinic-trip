"use client";
import { useEffect, useState } from "react";
import { createClient } from "contentful";

// Create Contentful client
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [groupNames, setGroupNames] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open

  // Fetch gallery data from Contentful when the component mounts
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await client.getEntries({
          content_type: "gallery", // Your content type name
        });

        // Map through the response items and set the gallery state
        const galleryData = response.items.map((item) => ({
          groupName: item.fields.groupName,
          galleryGroup: item.fields.galleryGroup || [], // Ensure galleryGroup is an empty array if undefined
        }));

        setGallery(galleryData);

        // Extract unique group names
        const uniqueGroupNames = Array.from(
          new Set(galleryData.map((item) => item.groupName))
        );
        setGroupNames(uniqueGroupNames);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGallery();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Filter gallery items based on selected group
  const filteredGallery = selectedGroup
    ? gallery.filter((item) => item.groupName === selectedGroup)
    : gallery;

  // Flatten the gallery items when 'Show all groups' is selected
  const flattenedGallery =
    selectedGroup === ""
      ? gallery.flatMap((item) => item.galleryGroup) // Merge all gallery groups into one array
      : filteredGallery.flatMap((item) => item.galleryGroup);

  // Handle opening the modal
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal when clicking outside the image
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold my-14">Gallery</h1>

      {/* Filter buttons */}
      <div className="w-full flex items-center justify-center mb-10 gap-5 flex-wrap">
        <button
          className={`btn rounded-none ${
            selectedGroup === "" ? "btn-secondary" : "btn-neutral"
          }`}
          onClick={() => setSelectedGroup("")}
        >
          Show all groups
        </button>
        {groupNames.map((group, index) => (
          <button
            key={index}
            className={`btn rounded-none ${
              selectedGroup === group ? "btn-secondary" : "btn-neutral"
            }`}
            onClick={() => setSelectedGroup(group)}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:w-4/5 lg:grid-cols-3 gap-8 xl:w-3/5 mx-auto mb-16">
        {/* Render filtered gallery */}
        {flattenedGallery.length > 0 ? (
          flattenedGallery.map((asset, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() =>
                asset.fields.file.contentType.startsWith("image/") &&
                openModal(asset.fields.file.url)
              }
            >
              {/* Check if it's an image or other media type */}
              {asset.fields.file.contentType.startsWith("image/") ? (
                <img
                  src={asset.fields.file.url}
                  alt={asset.fields.title || "Gallery Image"}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <a
                  href={asset.fields.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {asset.fields.title || "Download File"}
                </a>
              )}
            </div>
          ))
        ) : (
          <p>No gallery data available.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleOverlayClick} // Listen for click on the overlay
        >
          <div className="relative bg-white p-4 rounded-md w-full max-w-4xl">
            <button
              className="absolute top-6 right-6 text-white bg-black w-8 h-8 rounded-md"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
