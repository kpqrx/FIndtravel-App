import { Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../hooks";
import { selectSearchValue } from "../store/slices/searchSlice";
import axios from "axios";

const CityDetails = () => {
  const searchValue = useAppSelector(selectSearchValue);
  const [cityDetails, setCityDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { geonameId } = searchValue;

      if (!geonameId) {
        setCityDetails({});
        return;
      }

      try {
        const x = await axios.get(
          `http://192.168.1.7:3000/api/city/details/${geonameId}`
        );
        console.log(x);
        return;
        setCityDetails(data);
        alert(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, [setCityDetails]);

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(searchValue)}</Text>
    </SafeAreaView>
  );
};

export default CityDetails;
