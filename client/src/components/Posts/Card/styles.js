import { makeStyles, RootRef } from "@material-ui/core";

export default makeStyles((props) => ({
    container: {
        boxSizing: 'border-box',
        width: '300px',
        height: '550px',
        borderRadius: '16px',
        background: '#0002',
        color: '#fff',
        padding: 16,
        position: 'relative',
        overflow: 'hidden'
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    header: {
        boxSizing: 'border-box',
        width: '100%',
        border: 'groove 3px #fff',
        padding: '1px 8px',
        borderRadius: '8px',     
        background: '#1119',
        zIndex: 10,
        height: '40px'
    },
    title: {      
        fontSize: '14px',
    },
    section: {
        boxSizing: 'border-box',
        width: 'calc(100% - 32px)',
        zIndex: 11,
        position: 'absolute',
        bottom: 40,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    textTitle: {
        boxSizing: 'border-box',
        width: '100%',
        border: 'groove 3px #fff',
        padding: '1px 8px',
        borderRadius: '8px',     
        background: '#1119',
        zIndex: 13,
        margin: 0,
        fontSize: '12px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '1.2px'
    },
    textArea: {
        boxSizing: 'border-box',
        width: '95%',
        height: '100px',
        border: 'groove 3px #fff',
        borderRadius: '0  0 8px 8px',     
        background: '#1119',
        zIndex: 11,
        margin: 0,
        marginTop: '-3px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1.1px',
        padding: 6
    }
}))