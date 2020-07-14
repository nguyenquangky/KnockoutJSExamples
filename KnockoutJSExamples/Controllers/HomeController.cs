using KnockoutJSExamples.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockoutJSExamples.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult KnockoutJSExample()
        {
            ViewBag.Message = "KnockoutJS Example Page.";

            return View();
        }

        public ActionResult GetViewModelExample()
        {
            List<ExampleModel> model = new List<ExampleModel>();
            model.Add(new ExampleModel() { 
                Id = 1,
                FirstName = "John",
                LastName = "Henry" 
            });
            model.Add(new ExampleModel()
            {
                Id = 2,
                FirstName = "John",
                LastName = "Nguyen"
            });
            model.Add(new ExampleModel()
            {
                Id = 3,
                FirstName = "Tom",
                LastName = "Henry"
            });
            model.Add(new ExampleModel()
            {
                Id = 4,
                FirstName = "Terry",
                LastName = "Henry"
            });

            return Json(model, JsonRequestBehavior.AllowGet);
        }
    }
}