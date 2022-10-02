import { Router } from 'express';
import { StatusCodes } from '../common';
import { getTableData } from './repository';

const router = Router();

router.get('/', async (req, res) => {
  const allTableData = await getTableData(); // endpoint for frontend
  return res.json(allTableData);
});

export default router;
