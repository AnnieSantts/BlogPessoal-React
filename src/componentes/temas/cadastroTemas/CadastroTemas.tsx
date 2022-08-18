import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import './CadastroTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';



function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    const [tema, setTema] = useState<Tema>({
        id: 0,
        nome: '', 
        descricao: ""
      });

    useEffect(() => {
        if(token == ""){
            toast.error("Você precisa estar logado para acessar essa página");
            navigate("/login");
        }
        }, [token]);
    
        useEffect(() => {
            if(id != undefined){
                findById(id);
            }
        }, [id]);
    
        const findById = async (id: string) => {
            //adicionar try catch
            buscaId(`/tema/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        };
    
        const updatedTema = async (e: ChangeEvent<HTMLInputElement>) => {
            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
        }
    
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(tema))
    
            if (id !== undefined) {
                console.log(tema)
                put(`/tema`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema atualizado com sucesso');
            } else {
                post(`/tema`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            navigate('/tema')
        }
    
    
        return (
            <Container maxWidth="sm" className="topo">
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar tema</Typography>
                    <TextField inputProps={{ minLength: 5, maxLength: 150  }} required value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}id="descricao" label="Nome" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
            </Container>
        )
    }
    
    export default CadastroTema;