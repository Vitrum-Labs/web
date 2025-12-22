"use client";

import { useParams } from "next/navigation";
import InfluencerDetail from "@/app/components/pages/(main)/Identity/InfluencerDetail";

export default function InfluencerPage() {
  const params = useParams();
  const id = params.id as string;

  return <InfluencerDetail id={id} />;
}