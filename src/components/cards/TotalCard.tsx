import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function TotalCard() {
  return (
    <Card className="w-full">
      <CardHeader className=""></CardHeader>
      <CardBody>
        <div className=" w-full p-4 grid grid-cols-4 sm:grid-cols-4">
          <div></div>
          <div></div>
          <div>$</div>
          <div>riel</div>
        </div>
      </CardBody>
      <Divider />
    </Card>
  );
}
