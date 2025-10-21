"use client";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

// import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// const chartConfig = {
//   size: {
//     label: "Size",
//   },
//   used: {
//     label: "Used",
//     color: "white",
//   },
// } satisfies ChartConfig;
export const Chart = ({used=0}:{used:number})=>{
      const chartData = [{ storage: "used", 10: used, fill: "white" }];
return (
<p>Hello</p>
)
}