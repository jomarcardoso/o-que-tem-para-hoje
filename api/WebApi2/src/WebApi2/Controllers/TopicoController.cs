using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi2.Interface;
using WebApi2.Model;
using WebApi2.ViewModel;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860


namespace WebApi2.Controllers
{
    [Route("api/[controller]")]
    public class TopicoController
    {
        private readonly ITopicoService _topicoService;

        public TopicoController(ITopicoService topicoService)
        {
            _topicoService = topicoService;

        }

        [HttpGet]
        public TopicosResposta Get()
        {
            List<Topico> itens = _topicoService.ListTopicos().ToList<Topico>();
            if(itens != null)
            {
                return new TopicosResposta(itens);
            }
            else
            {
                return new TopicosResposta("Nenhum Topico encontrado");
            }
        }

        [HttpGet("{id}")]
        public TopicosResposta Get(int id)
        {
            List<Topico> itens = _topicoService.ListTopicos().ToList<Topico>();
            if (itens != null)
            {
                var aux = itens.Where(t => t.IdTopico == id);
                if(aux != null)
                {
                    return new TopicosResposta(aux);                    
                }
                else
                {
                    return new TopicosResposta("Nenhum Topico encontrado");
                }
                return new TopicosResposta(itens);
            }
            else
            {
                return new TopicosResposta("Nenhum Topico encontrado");
            }
        }

        [HttpPost]
        public void Post([FromBody] Topico topico)
        {
            int max = 0;
            List<Topico> itens = _topicoService.ListTopicos().ToList<Topico>();
            if(itens.Count > 0)
            {
                max = _topicoService.ListTopicos().ToList<Topico>().Max(l => l.IdTopico);
            }
            topico.IdTopico = max + 1;
            _topicoService.AddTopico(topico);
        }
    }
}