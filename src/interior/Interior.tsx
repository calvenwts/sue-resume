import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import "./Interior.css";
import InteriorComponent from "./InteriorComponent";
import InteriorFilterComponent from "./InteriorFilterComponent";
import { InteriorObject } from "./data/InteriorData";

const InteriorHome = () => {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        setData(
            [...InteriorObject]
        )
    }, []);

    const handleFilter = (val: string) => {
        if (val === "Project Types") {
            setData(
                [...InteriorObject]
            )
        } else {
            const CurrentData = [...InteriorObject]
            const result = CurrentData.filter((currData: any) => currData.type === val);
            setData(result);
        }
    }

    return (
        <Container
            sx={{ display: 'flex' }}
            maxWidth="lg"
            className="content-container interior-home-container">
            <div className="interior-home">
                <InteriorFilterComponent handleFilter={handleFilter} />
                <div className="interior-home-row">
                    {
                        data.map((data: any) => {
                            return (
                                <InteriorComponent
                                    key={data.title}
                                    image={data.image}
                                    title={data.title}
                                    type={data.type}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default InteriorHome;