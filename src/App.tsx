import { Card, Box, Typography, TextField, Button } from '@mui/material'
import { useIMC } from './hooks/useimc'

export default function App() {
  const {
    peso,
    setPeso,
    altura,
    setAltura,
    imc,
    classificacao,
    erro,
    calcularIMC,
    resetar
  } = useIMC()

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100vw'}
      minHeight={'100vh'}
    >
      <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginY: '144px',
        marginX: '16px',
      }}
      >

        <Box
          marginY={`16px`} display="flex" alignItems="center" gap={1}
        >
          <img src="/calculadora.png" alt="Icone Calculadora" width="32" height="32" />

          <Typography variant='h5' fontWeight={'700'} >Calculadora IMC</Typography>
        </Box>

        <Box
          display="flex" flexDirection="column" marginBottom="16px" gap={2} width="80%"
        >
          <TextField label="Peso (kg)" variant="outlined" fullWidth value={peso} onChange={(e) => setPeso(e.target.value)} />
          <TextField label="Altura (m)" variant="outlined" fullWidth value={altura} onChange={(e) => setAltura(e.target.value)} />
          <Button variant="contained" color="primary" onClick={calcularIMC}>
            Calcular IMC
          </Button>
        </Box>

        {erro && (
          <Typography color="error" fontSize="0.9rem">
            {erro}
          </Typography>
        )}

        {imc !== null && (
          <Box 
            marginBottom="16px"
            width="80%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h6" align="left" width="100%" fontWeight={'700'}>Resultado:</Typography>
            <Typography align="left" width="100%">Seu IMC é: {imc}</Typography>
            <Typography align="left" width="100%">Classificação: {classificacao}</Typography>

            <Button 
              variant="contained" 
              color="secondary" 
              sx={{ marginTop: '16px' }}
              onClick={resetar}
            >
              Apagar
            </Button>
          </Box>
        )}

      </Card>
    </Box>
  )
}
