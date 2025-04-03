import { Card, Box, Typography } from '@mui/material';

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

          <Typography variant='h5' fontWeight={'700'} >
            Calculadora IMC
          </Typography>
        </Box>

        <Box>
          <Typography>
            entradas
          </Typography>
        </Box>

        <Box>
          <Typography>
            resultado
          </Typography>
        </Box>

      </Card>
    </Box>
  )
}
