import { i as decodeKey } from './chunks/astro/server_B1D3uily.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_IbmU4iJC.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/JeanGomez/Frontend/Parquearse/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"contactenos/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contactenos","isIndex":false,"type":"page","pattern":"^\\/contactenos\\/?$","segments":[[{"content":"contactenos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contactenos.astro","pathname":"/contactenos","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"nosotros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"novedades/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/novedades","isIndex":false,"type":"page","pattern":"^\\/novedades\\/?$","segments":[[{"content":"novedades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/novedades.astro","pathname":"/novedades","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"politicas/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/politicas","isIndex":false,"type":"page","pattern":"^\\/politicas\\/?$","segments":[[{"content":"politicas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politicas.astro","pathname":"/politicas","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"sedes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sedes","isIndex":false,"type":"page","pattern":"^\\/sedes\\/?$","segments":[[{"content":"sedes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sedes.astro","pathname":"/sedes","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"servicios/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/servicios","isIndex":false,"type":"page","pattern":"^\\/servicios\\/?$","segments":[[{"content":"servicios","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/servicios.astro","pathname":"/servicios","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"soluciones/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/soluciones","isIndex":false,"type":"page","pattern":"^\\/soluciones\\/?$","segments":[[{"content":"soluciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/soluciones.astro","pathname":"/soluciones","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.16.6_@types+node@22.8.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/JeanGomez/Frontend/Parquearse/src/pages/contactenos.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/novedades.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/politicas.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/sedes.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/servicios.astro",{"propagation":"none","containsHead":true}],["E:/JeanGomez/Frontend/Parquearse/src/pages/soluciones.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/mas/[name]@_@astro":"pages/mas/_name_.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/novedades@_@astro":"pages/novedades.astro.mjs","\u0000@astro-page:src/pages/politicas@_@astro":"pages/politicas.astro.mjs","\u0000@astro-page:src/pages/sedes@_@astro":"pages/sedes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/contactenos@_@astro":"pages/contactenos.astro.mjs","\u0000@astro-page:src/pages/servicios@_@astro":"pages/servicios.astro.mjs","\u0000@astro-page:src/pages/soluciones@_@astro":"pages/soluciones.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.16.6_@types+node@22.8.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","E:/JeanGomez/Frontend/Parquearse/node_modules/.pnpm/astro@4.16.6_@types+node@22.8.6_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_rBdK9Kiq.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Dlz-BFFs.js","/astro/hoisted.js?q=1":"_astro/hoisted.Bq-liYKp.js","/astro/hoisted.js?q=2":"_astro/hoisted.Bn8_rRFv.js","/astro/hoisted.js?q=3":"_astro/hoisted.BgH0JkOP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contactenos.DmwDx_CU.css","/favicon.svg","/images/0fd3416c.jpeg","/images/2100775.png","/images/6854731.png","/images/68f64b9d.jpeg","/images/8ad73f3c.jpeg","/images/9020587.png","/images/adm1.png","/images/automatismoneomundo.png","/images/avisoingresoaclasesUCC.jpg","/images/avisoingresoaclasesUSTA.jpg","/images/b6edb6039c389d0616eb98b791f1db35a9e4ae656cb7de897d51752964ce334db224d12571b40321631c5c34c9a6b68a21cf7aa4ee32610895364e_1280.png","/images/banner.png","/images/BANNER3.png","/images/BANNER4.png","/images/BANNERPARKINGNEW.png","/images/BANNERPARKINGNEW2.png","/images/BTL1.png","/images/bucarica-parking.jpeg","/images/cabecera-parking.jpeg","/images/cajero.jpeg","/images/cajerofisico.jpeg","/images/calidad1.png","/images/campaña.jpg","/images/capacitacion.jpg","/images/celebracion.jpg","/images/conv1.png","/images/corazon.png","/images/datafonos.png","/images/default-image.jpg","/images/desayunosday.jpg","/images/entradaustaflorida.png","/images/facelectronica.png","/images/faceletronic.png","/images/favicon.ico","/images/festival3.png","/images/fotofreparkingA2.png","/images/freeparking.png","/images/gps.png","/images/grupoempresa.jpeg","/images/grupopersonal1.jpg","/images/grupopersonal1.png","/images/grupopersonal1old.jpg","/images/halloween.jpg","/images/historia.jpg","/images/jornadainciendo.jpg","/images/logcle.png","/images/logo30anios.png","/images/logohorizontal.png","/images/markting.png","/images/megamall1.jpeg","/images/mensday.jpg","/images/milleniunpromo.png","/images/nochemejores.png","/images/parking-carros.jpeg","/images/parkinintegrated1.png","/images/picoyplaca.png","/images/picoyplaca1.png","/images/pqr.png","/images/promo1.png","/images/publicidad.jpeg","/images/reglamento.png","/images/saludocupacional.jpg","/images/sedetorresdelbosque.png","/images/UNABMAQUINAS.png","/images/valet4.png","/images/valetparking1.png","/images/valetservice2.png","/images/visualmarketing4.jpg","/js/mapkick.js","/js/prueba.js","/js/sedes.map.js","/js/solicitud.servicios.js","/pdf/decreto0219.pdf","/pdf/politicadetratamientosdedatos.pdf","/svgs/back.svg","/svgs/logo30anios.png","/svgs/logoPrincipal.svg","/svgs/next.svg","/_astro/efectos.apriW6ua.js","/_astro/helpers.GiHf2Qtq.js","/_astro/hoisted.BgH0JkOP.js","/_astro/hoisted.Bn8_rRFv.js","/_astro/hoisted.Bq-liYKp.js","/_astro/hoisted.Dlz-BFFs.js","/contactenos/index.html","/nosotros/index.html","/novedades/index.html","/politicas/index.html","/sedes/index.html","/servicios/index.html","/soluciones/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"KsLtRJmUPMMnDya5rnYrAsRgy6EPzACS6LcfGliWgOs=","experimentalEnvGetSecretEnabled":false});

export { manifest };
