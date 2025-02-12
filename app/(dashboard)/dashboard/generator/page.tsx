"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PickUpLinesGenerator = () => {
  const [pickupLine, setPickupLine] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const generatePickupLine = async () => {
    setIsLoading(true);
    setPickupLine(""); // Clear previous pickup line while loading

    try {
      const res = await fetch(`https://rizzapi.vercel.app/random`);
      const data = await res.json();
      console.log(data);
      setPickupLine(data.text);
    } catch (error) {
      console.error("Error generating pickup line:", error);
      setPickupLine("Sorry, something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-[0.8] my-4 mx-auto">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Pickup Line Generator</CardTitle>
          <CardDescription>
            Let AI generate a perfect pickup line for you!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            onClick={generatePickupLine}
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? "Generating..." : "Generate Pickup Line"}
          </Button>

          {pickupLine && (
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-center italic">{pickupLine}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* History Section */}
      <Card className="w-full mt-4">
        <CardHeader>
          <CardTitle>History</CardTitle>
          <CardDescription>
            Your previously generated pickup lines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No pickup lines generated yet.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PickUpLinesGenerator;
