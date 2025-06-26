const express = require('express');
const router = express.Router();
const AlunoService = require('../services/aluno.service');

router.get('/listar', (req, res) => {
  res.json(AlunoService.listar());
});

router.post('/criar', (req, res) => {
  const novoAluno = AlunoService.criar(req.body);
  res.json(novoAluno);
});

router.get('/pegarId/:id', (req, res) => {
  const aluno = AlunoService.pegarId(req.params.id);
  res.json(aluno);
});

router.put('/atualizar/:id', (req, res) => {
  const alunoAtualizado = AlunoService.atualizar(req.params.id, req.body);
  res.json(alunoAtualizado);
});

router.delete('/apagar/:id', (req, res) => {
  const resultado = AlunoService.apagar(req.params.id);
  res.json(resultado);
});

module.exports = router;