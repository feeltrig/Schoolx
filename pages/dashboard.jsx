import {Container, Divider, Heading, HStack, VStack} from "@chakra-ui/react";
import React, {useMemo, useState} from "react";
import CustomCard from "../components/CustomCard/CustomCard";
import CustomModal from "../components/CustomModal/CustomModal";
import CustomStats from "../components/CustomStats/CustomStats";
import {toggleObjectState} from "../Funtions/dataFunctions";

const dashboard = () => {
  const [dashboardState, setDashboardState] = useState({
    detailModalOpen: false,
    customCard: {},
  });

  // close detail modal
  const handleDetailModalClose = () =>
    toggleObjectState(setDashboardState, "detailModalOpen", false);

  // handle card click
  const handleCardClick = (e, props) => {
    toggleObjectState(setDashboardState, "customCard", props);
    toggleObjectState(setDashboardState, "detailModalOpen", true);
  };

  // custom modal props
  const modalprops = useMemo(
    () => ({
      isOpen: dashboardState.detailModalOpen,
      handleClose: handleDetailModalClose,
      title: dashboardState.customCard.heading,
      bodyContent: dashboardState.customCard.content,
      size: "6xl",
      imageurl: dashboardState.customCard.imageurl,
    }),
    [dashboardState]
  );

  return (
    <VStack align={"start"} m={0} spacing={"2rem"}>
      <VStack
        align={"start"}
        spacing={"2rem"}
        bg="white"
        p={"1rem"}
        borderRadius="md"
        w={"full"}
      >
        <Heading>Rankings</Heading>
        <HStack spacing={"1rem"}>
          <CustomStats />
        </HStack>
      </VStack>
      <VStack
        align={"start"}
        spacing={"2rem"}
        bg="white"
        p={"1rem"}
        borderRadius="md"
        w={"full"}
      >
        <Heading>Upcoming Events</Heading>
        <HStack spacing={"1rem"}>
          <CustomCard
            onClick={handleCardClick}
            heading={"Parents meeting on Jul 5th"}
            imageurl={
              "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            content={
              "Arranged a meeting with parents on Jul 5th 2023 to discuss performance of their related child"
            }
          />
          <CustomCard
            onClick={handleCardClick}
            heading={"Parents meeting on Jul 5th"}
            imageurl={
              "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                
                
                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}
          />
          <CustomCard
            heading={"Parents meeting on Jul 5th"}
            imageurl={
              "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            }
            content={
              "Arranged a meeting with parents on Jul 5th 2023 to discuss performance of their related child"
            }
          />
        </HStack>
      </VStack>
    </VStack>

    // <CustomModal {...modalprops} />
  );
};

export default dashboard;
