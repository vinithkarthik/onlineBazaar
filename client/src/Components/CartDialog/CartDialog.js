import { Grid } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ClearIcon from '@mui/icons-material/Clear';
import ButtonComp from '../Common/ButtonComp';
import { domain } from '../../Constants';
import Iconbutton from '../Common/Iconbutton';

const CartDialog = ({ list, open, totalItems, handleClose, updateList }) => {

  let dialogContent = [], totalPrice = 0;

  const addItem = id => {
    let updatedList = JSON.parse(JSON.stringify(list));
    let modifiedProduct = updatedList[id];
    modifiedProduct.quantity += 1;
    updateList(updatedList, totalItems + 1);
  }

  const removeItem = id => {
    let updatedList = JSON.parse(JSON.stringify(list));
    let modifiedProduct = updatedList[id];
    if (modifiedProduct.quantity > 1) {
      modifiedProduct.quantity -= 1;
    } else {
      delete updatedList[id];
    }
    updateList(updatedList, totalItems - 1);
  }

  if (totalItems > 0) {
    for (const key in list) {
      dialogContent.push(
        <Grid key={key} container>
          <Grid item xs={2}>
            <img className={'cart-dialog-img'} src={`${domain}api${list[key].imageURL}`} alt={list[key].name} role="button"></img>
          </Grid>
          <Grid item xs={8}>
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
              <Grid item>
                <b>{list[key].name}</b>
              </Grid>
              <Grid item>
                <Grid container justifyContent={'center'} alignItems={'center'} columnSpacing={3}>
                  <Grid item>
                    <Iconbutton onClick={() => addItem(list[key].id)} >
                      <AddCircleIcon />
                    </Iconbutton>
                  </Grid>
                  <Grid item>
                    {list[key].quantity}
                  </Grid>
                  <Grid item>
                    <Iconbutton onClick={() => removeItem(list[key].id)}>
                      <RemoveCircleIcon />
                    </Iconbutton>
                  </Grid>
                  <Grid item>
                    <ClearIcon htmlColor={'primary'} fontSize={'small'} />
                  </Grid>
                  <Grid item>
                    Rs.{list[key].price}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            Rs.{list[key].quantity * list[key].price}
          </Grid>
        </Grid>
      )
      totalPrice += list[key].quantity * list[key].price;
    }
  } else {
    dialogContent.push(
      <Grid key={'cart-empty'} className='cart-empty' container justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          <b>No items in your cart</b>
        </Grid>
        <Grid item xs={12}>
          <p>Your favourite items are clicks away</p>
        </Grid>
      </Grid>
    )
  }

  return (
    <div>
      <Dialog className='cart-dialog' fullWidth open={open} onClose={handleClose}>
        <DialogTitle className='cart-dialog-title'>
          My Cart ({totalItems} item)
          <Iconbutton onClick={handleClose} className={'cart-dialog-close'}>
            <ClearIcon htmlColor={'white'} />
          </Iconbutton>
        </DialogTitle>
        <DialogContent className='cart-dialog-content'>
          {dialogContent}
        </DialogContent>
        {totalItems > 0 && < ButtonComp variant="contained" onClick={handleClose}><span className='checkout-btn'>Proceed to Checkout</span><span className='checkout-price'>Rs.{totalPrice}</span></ButtonComp>}
        {totalItems == 0 && < ButtonComp variant="contained" onClick={handleClose}>Start Shopping</ButtonComp>}
      </Dialog >
    </div >
  );
}

export default CartDialog;