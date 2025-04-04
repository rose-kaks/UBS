import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Clock, Download, Share2, School, BarChart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const VolunteerCertificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Mathematics Teaching Excellence",
      issueDate: "March 15, 2023",
      school: "Westside High School",
      hours: 50,
      recipient: "John Doe"
    },
    {
      id: 2,
      title: "Science Education Contribution",
      issueDate: "February 10, 2023",
      school: "Central Middle School",
      hours: 35,
      recipient: "John Doe"
    }
  ];

  // Function to generate and download a styled certificate
  const generateCertificate = async (certificate: any) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not supported!");
      return;
    }

    canvas.width = 900;
    canvas.height = 600;

    // Background color
    ctx.fillStyle = "#fdfdfd";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Function to load images
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (error) => reject(error);
      });
    };

    try {
      // Load and draw a decorative border
      const borderImage = await loadImage("/border-frame.png");
      ctx.drawImage(borderImage, 0, 0, canvas.width, canvas.height);
    } catch (error) {
      console.warn("Border image not found. Using default styling.");
    }

    // Fancy Title
    ctx.fillStyle = "#2c3e50";
    ctx.font = "bold 38px 'Georgia'";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Excellence", canvas.width / 2, 120);

    // Decorative Line Below Title
    ctx.strokeStyle = "#d4af37"; // Gold color
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(250, 140);
    ctx.lineTo(650, 140);
    ctx.stroke();

    // Recipient Name
    ctx.fillStyle = "#000";
    ctx.font = "italic 28px 'Times New Roman'";
    ctx.fillText(`Presented to: ${certificate.recipient}`, canvas.width / 2, 220);

    // Certificate Details
    ctx.font = "22px 'Arial'";
    ctx.fillText(certificate.title, canvas.width / 2, 280);
    ctx.fillText(`Issued by: ${certificate.school}`, canvas.width / 2, 340);
    ctx.fillText(`Date: ${certificate.issueDate}`, canvas.width / 2, 400);
    ctx.fillText(`Teaching Hours: ${certificate.hours}`, canvas.width / 2, 460);

    // Gold Seal
    try {
      const sealImage = await loadImage("/gold-seal.png");
      ctx.drawImage(sealImage, canvas.width - 180, canvas.height - 180, 100, 100);
    } catch (error) {
      console.warn("Gold seal image not found.");
    }

    // Signature Line
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 520);
    ctx.lineTo(300, 520);
    ctx.stroke();

    // Signature Text
    ctx.font = "18px 'Arial'";
    ctx.fillText("Authorized Signature", 200, 550);

    // Convert canvas to image and download
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${certificate.title}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Earned Certificates</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <Card key={certificate.id} className="overflow-hidden">
              <div className="relative h-32 bg-gradient-to-r from-orange-500 to-amber-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{certificate.title}</CardTitle>
                <CardDescription>
                  Issued on {certificate.issueDate} by {certificate.school}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Teaching Hours: {certificate.hours}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button onClick={() => generateCertificate(certificate)} className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VolunteerCertificates;
