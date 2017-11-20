using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.FileProviders;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebApiExemplo.Interface;
using WebApiExemplo.Model;
using WebApiExemplo.ViewModel;

namespace WebApiExemplo.Controllers
{
    [Route("api/[controller]")]
    public class TopicoController
    {


        private readonly ITopicoService _topicoService;


        public TopicoController(ITopicoService topicoService)
        {
            _topicoService = topicoService;
            //_topicoService.AddTopico(new Topico(1, "Esporte"));
            //_topicoService.AddTopico(new Topico(1, "Politica"));
        }


        // GET api/values
        [HttpGet]
        public SolicitaTopicosResposta Get()
        {
            
            List<Topico> Items = _topicoService.ListTopicos().ToList();

            if (Items != null)
            {

                return new SolicitaTopicosResposta(Items);
            }
            else
            {
                return new SolicitaTopicosResposta("Nenhum Topico Encontrado");
            }

        }
        // GET api/values/5
        [HttpGet("{id}")]
        public SolicitaTopicosResposta Get(int id)
        {

            List<Topico> Items = _topicoService.ListTopicos().ToList();

            if (Items != null)
            {
                var val = Items.Where(t => t.IdTopico == id);
                if (val != null)
                    return new SolicitaTopicosResposta(val);

                return new SolicitaTopicosResposta("Nenhum Topico Encontrado");
            }
            else
            {
                return new SolicitaTopicosResposta("Nenhum Topico Encontrado");
            }
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Topico topico)
        {
                int max = 0;
                List<Topico> lst = _topicoService.ListTopicos().ToList();
                if (lst.Count > 0)
                {
                    max = _topicoService.ListTopicos().ToList().Max(l => l.IdTopico);
                }
                topico.IdTopico = max + 1;
                _topicoService.AddTopico(topico);
    
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Topico topico)
        {
            int max = 0;
            Topico _topico = _topicoService.ListTopicos().Where(t=>t.IdTopico==id).FirstOrDefault();
            if (_topico!=null)
            {
                _topico.NomeTopico = topico.NomeTopico;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


    }
}
