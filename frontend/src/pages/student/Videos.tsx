import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";

const StudentVideos = () => {
  const youtubeVideos = [
    "https://www.youtube.com/embed/IjdVNCDzbYE",  // First video
    "https://www.youtube.com/embed/J4QbQylnnos",  // Second video link
    "https://www.youtube.com/embed/7y1zxYprS3w",  // Third video
    "https://www.youtube.com/embed/itMII7Z-hnA",  // Fourth video
  ];

  const [notes, setNotes] = useState(Array(youtubeVideos.length).fill("Loading notes..."));
  const [loading, setLoading] = useState(Array(youtubeVideos.length).fill(false)); // Track loading state
  const [selectedLanguage, setSelectedLanguage] = useState("en");  // Default to English

  const getVideoId = (embedUrl) => {
    const match = embedUrl.match(/embed\/([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  const fetchNotes = async (videoUrl, index) => {
    const videoId = getVideoId(videoUrl);
    if (!videoId) return;

    setLoading((prevState) => {
      const updatedLoading = [...prevState];
      updatedLoading[index] = true; // Set loading to true for the specific video
      return updatedLoading;
    });

    try {
      const response = await axios.post("http://localhost:5001/youtube_summary", {
        youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
        language: selectedLanguage,  // Send the selected language
      });

      setNotes((prevNotes) => {
        const updatedNotes = [...prevNotes];
        updatedNotes[index] = response.data.summary || "No notes available.";
        return updatedNotes;
      });
    } catch (error) {
      console.error("Error fetching notes:", error);
      setNotes((prevNotes) => {
        const updatedNotes = [...prevNotes];
        updatedNotes[index] = "Failed to load notes.";
        return updatedNotes;
      });
    } finally {
      setLoading((prevState) => {
        const updatedLoading = [...prevState];
        updatedLoading[index] = false; // Set loading to false after the API call
        return updatedLoading;
      });
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);  // Set the selected language
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        {/* Join Class Section at the Top */}
        <div className="bg-blue-600 text-white py-8 rounded-md shadow-md">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Join a Class</h2>
            <p className="text-lg mb-6">Take your learning to the next level. Join our upcoming classes and enhance your skills with expert instructors!</p>
            <Button className="px-8 py-3 text-lg bg-green-600 hover:bg-green-700 transition-all duration-300">
              Join Now
            </Button>
          </div>
        </div>

        {/* Search & Video Section */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Video Library</h1>
            <p className="text-muted-foreground">Access educational videos and recorded lectures</p>
          </div>
          <div className="relative max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search videos..." className="pl-8" />
          </div>
        </div>

        {/* Language Selector */}
        <div className="my-4">
          <label htmlFor="language-select" className="mr-2">Select Language:</label>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Video Display with Notes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {youtubeVideos.map((videoUrl, index) => (
            <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-lg bg-white p-4">
              <iframe
                width="100%"
                height="280"
                src={videoUrl}
                title={`YouTube Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video rounded-lg"
              ></iframe>
              
              {/* Notes Section */}
              <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700">
                <h3 className="text-lg font-semibold text-gray-900">Notes:</h3>
                <p className="text-sm mt-2">{notes[index]}</p>
              </div>
              
              {/* Generate Notes Button */}
              <Button
                onClick={() => fetchNotes(videoUrl, index)}
                className="mt-4 px-6 py-3 text-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                disabled={loading[index]} // Disable button if loading
              >
                {loading[index] ? (
                  <span className="animate-spin">🔄</span> // Spinner while loading
                ) : (
                  "Generate Notes"
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentVideos;