const express = require('express');
const router = express.Router();
const { OrderItem } = require('../models/order-item');

router.get('/', async (req, res) => {
    try {
      // Ambil semua item dalam keranjang dari database
      const orderItems = await OrderItem.find().populate('product');
  
      res.json(orderItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Menambahkan item baru ke keranjang
router.post('/', async (req, res) => {
  try {
    const { quantity, product } = req.body;

    // Membuat objek baru dari model OrderItem
    const orderItem = new OrderItem({
      quantity,
      product,
    });

    // Menyimpan objek ke database
    const savedOrderItem = await orderItem.save();

    res.status(201).json(savedOrderItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mengubah kuantitas item dalam keranjang
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { quantity } = req.body;
  
      // Mencari item dalam keranjang berdasarkan ID
      const orderItem = await OrderItem.findById(id);
  
      if (!orderItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      // Mengubah kuantitas item
      orderItem.quantity = quantity;
  
      // Menyimpan perubahan ke database
      const updatedOrderItem = await orderItem.save();
  
      res.json(updatedOrderItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Menghapus item dari keranjang
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Menghapus item dari database berdasarkan ID
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