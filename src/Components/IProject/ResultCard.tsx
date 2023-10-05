import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { Data } from "../../type/data";

interface Props {
  data: Data;
}

const ResultCard = ({ data }: Props) => {

  return (
    <>
      <Card mb={"2rem"}>
        <CardHeader>
          <Link fontSize={"sm"} colorScheme="'grey.200" href={data.url.toString()}>
            {data.url}
          </Link>
          <Heading size="md" mt={"1rem"}>
            {" "}
            {data.title}
          </Heading>
        </CardHeader>
        <CardBody>
          <Text>{data.abstract}</Text>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"end"}>

          
        { data.isOpenAccess ? <Link href={data.openAccessPdf?.url.toString()}> <Button
            borderRadius={"20px"}
            padding={"1.3rem"}
            ml={"1rem"}
            colorScheme="green"
            
          >
            Get Content
          </Button>  </Link> : <Button
            borderRadius={"20px"}
            padding={"1.3rem"}
            ml={"1rem"}
            colorScheme="red"
            
          >
            No Pdf
          </Button>  }
        </CardFooter>
      </Card>
    </>
  );
};

export default ResultCard;
