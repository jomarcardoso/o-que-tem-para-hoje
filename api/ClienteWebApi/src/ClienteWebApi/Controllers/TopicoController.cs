using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Net.Http.Headers;
using ClienteWebApi.ViewModel;
using Newtonsoft.Json;
using System.Diagnostics;
using ClienteWebApi.Models;
using System.Text;

namespace ClienteWebApi.Controllers
{
    public class TopicoController : Controller
    {

        HttpClient client;
        private string _route = "api/topico";
        private string _restUrl = String.Format(@"http://{0}:{1}/", "localhost", "5000");



        private TimeSpan defaultTimeout;
        public TopicoController()
        {
            client = new HttpClient();
            defaultTimeout = client.Timeout;
            client.MaxResponseContentBufferSize = 256000;
        }

        // GET: Topico
        public async Task<ActionResult> Index()
        {
            client.Timeout = defaultTimeout;
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            SolicitaTopicosResposta Items = new SolicitaTopicosResposta();
            var uri = new Uri(string.Format(_restUrl + _route));
            var response = await client.GetAsync(uri);
            var content = await response.Content.ReadAsStringAsync();
            Items = JsonConvert.DeserializeObject<SolicitaTopicosResposta>(content);

            return View(Items.topicos);
        }

        // GET: Topico/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: Topico/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Topico/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind("IdTopico,NomeTopico")] Topico topico)
        {
            var uri = new Uri(string.Format(_restUrl + _route));
            try
            {
                string jsonContent = JsonConvert.SerializeObject(topico);
                var inputMessage = new HttpRequestMessage
                {
                    Content = new StringContent(jsonContent, Encoding.UTF8, "application/json")
                };
                inputMessage.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.PostAsync(uri, inputMessage.Content).Result;
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Topico/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Topico/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Topico/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Topico/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}