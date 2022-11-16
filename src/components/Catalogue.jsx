import styled from "styled-components";
import { catalogue } from "../data";
import CatalogueItem from "./CatalogueItem";
import {mobile} from "../Responsive";

const Catalogue = () => {
    return <Container>
      {catalogue.map(item =>(
        <CatalogueItem  item={item} key ={item.id}/>
             
      ))}
    </Container>;
  
};


const Container = styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ padding: "0px", flexDirection:"column" })}`;

export default Catalogue