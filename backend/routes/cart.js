const express = require('express');
const router = express.Router();
const { OrderItem } = require('../models/order-item');

router.get('/', async (req, res) => {
    try {
      const orderItems = await OrderItem.find().populate('product');
  
      res.json(orderItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
  try {
    const { quantity, product } = req.body;

    const orderItem = new OrderItem({
      quantity,
      product,
    });

    const savedOrderItem = await orderItem.save();

    res.status(201).json(savedOrderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
  
      const orderItem = await OrderItem.findById(id);
  
      if (!orderItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      orderItem.quantity = quantity;
  
      const updatedOrderItem = await orderItem.save();
  
      res.json(updatedOrderItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrderItem = await OrderItem.findByIdAndRemove(id);

    if (!deletedOrderItem) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;