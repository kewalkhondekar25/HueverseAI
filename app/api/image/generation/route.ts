import { NextRequest, NextResponse } from "next/server";
import axios from "axios"

interface TextToImage {
  prompt: string,
  quality: string,
  variations: number
}

export const POST = async (req: NextRequest) => {
  try {

    const { prompt, quality, variations }: TextToImage = await req.json();

    const body = {
      prompt,
      model: "dall-e-2",
      n: variations,
      size: quality
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    };

    const response = await axios.post(
      `${process.env.OPENAI_DALL_E_API}`,
      body,
      { headers }
    );

    const data = response.data;
    console.log(data);
    
    return NextResponse.json({
      message: "Image generated successfully",
      data
    }, { status: 200 });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error: ", error.response?.data || error.message);
      return NextResponse.json({
        message: "Error in generating image.",
        error: error.response?.data || error.message
      },
      { status: 500 });
    } else if (error instanceof Error) {
      console.error("General error: ", error.message);
      return NextResponse.json({
        message: "Error generating image.",
        error: error.message
      },
      { status: 500 });
    }else{
      console.error("Unknown error:", error);
      return NextResponse.json({
        message: "Unexpected error occurred."
      }, 
      {status: 500});
    };
  };
};