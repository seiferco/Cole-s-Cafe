import { Box, Button } from '@mui/joy';

function NavBar() {
    return (
        <Box
            component="nav"
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'neutral.softBg',
                padding: '1rem 2rem',
                boxShadow: 'sm',
            }}
        >
            <h2 style={{ margin: 0 }}>Cole's Cafe</h2>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="soft" color="neutral">Home</Button>
                <Button variant="soft" color="neutral">Menu</Button>
                <Button variant="soft" color="neutral">Contact</Button>
            </Box>
        </Box>
    );
}

export default NavBar