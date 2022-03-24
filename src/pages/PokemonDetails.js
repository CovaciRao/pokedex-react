import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card} from "react-bootstrap";
import { Link } from "react-router-bootstrap"
import { useParams } from "react-router-dom";

import Loader from '../components/Loader';
const APIURL = 'https://pokeapi.co/api/v2';
const PokemonDetails = () => {

    const id = useParams().id;
    const [pokemonDetail, setPokemonDetail] = useState();
    const [loading, setLoading] = useState(true);

    const getPokemon = async (id) => {
        const details = await getPokemonData(id);
        setPokemonDetail(details.data);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`${APIURL}/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemon(id);
    }, []);

    return (
        <>
            {loading &&
                <Loader />
            }
            {!loading &&
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Card className="my-3 p-3 rounded text-center shadow p-3 mb-5 bg-white"
                        style={{ border:'none'}}>
                            <Card.Img style={{ width: "15rem"}}
                            src={pokemonDetail.sprites.front_default} variant="top">

                            </Card.Img>
                        </Card>
                    </Col>
                </Row>
            }
        </>
    );
}

export default PokemonDetails;