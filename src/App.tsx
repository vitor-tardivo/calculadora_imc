import { Card, Box, Typography, TextField, Button } from '@mui/material';

export default function App() {

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'flex-start'}
      width={'100vw'}
      height={'100vh'}
    >
      <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: '144px',
        marginX: '16px',
      }}
      >

        <Box
          marginY={`16px`} display="flex" alignItems="center" gap={1}
        >
          <img src="../public/calculadora.png" alt="Icone Calculadora" width="32" height="32" />

          <Typography variant='h5' fontWeight={'700'} >Calculadora IMC</Typography>
        </Box>

        <Box
          display="flex" flexDirection="column" gap={2} width="80%"
        >
          <TextField label="Peso (kg)" variant="outlined" fullWidth />
          <TextField label="Altura (m)" variant="outlined" fullWidth />
          <Button variant="contained" color="primary">
            Calcular IMC
          </Button>
        </Box>

        <Box 
          marginY="16px"
          width="80%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Typography variant="h6" fontWeight={'700'}>Resultado:</Typography>
          <Typography>Seu IMC é: (22,5)</Typography>
          <Typography>Classificação: (Peso normal)</Typography>
        </Box>

      </Card>
    </Box>
  )
}
