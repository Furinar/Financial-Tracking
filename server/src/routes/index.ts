import { Router, Request, Response } from 'express'
const router = Router()

router.get('/', function (_req: Request, res: Response) {
  res.render('index', { title: 'Express (TypeScript ESM)' })
})

export default router
