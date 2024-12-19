import{aV as h,aW as f,aX as c}from"./index-Dg322SbI.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new i.Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="68f711a5-8ca3-411c-a04c-573ce7c42cf2",i._sentryDebugIdIdentifier="sentry-dbid-68f711a5-8ca3-411c-a04c-573ce7c42cf2")}catch{}})();let d=0;class x{constructor(e){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1}createTexture(e,o,t){const l=new h({...this.textureOptions,width:e,height:o,resolution:1,antialias:t,autoGarbageCollect:!0});return new f({source:l,label:`texturePool_${d++}`})}getOptimalTexture(e,o,t=1,l){let s=Math.ceil(e*t-1e-6),n=Math.ceil(o*t-1e-6);s=c(s),n=c(n);const u=(s<<17)+(n<<1)+(l?1:0);this._texturePool[u]||(this._texturePool[u]=[]);let r=this._texturePool[u].pop();return r||(r=this.createTexture(s,n,l)),r.source._resolution=t,r.source.width=s/t,r.source.height=n/t,r.source.pixelWidth=s,r.source.pixelHeight=n,r.frame.x=0,r.frame.y=0,r.frame.width=e,r.frame.height=o,r.updateUvs(),this._poolKeyHash[r.uid]=u,r}getSameSizeTexture(e,o=!1){const t=e.source;return this.getOptimalTexture(e.width,e.height,t._resolution,o)}returnTexture(e){const o=this._poolKeyHash[e.uid];this._texturePool[o].push(e)}clear(e){if(e=e!==!1,e)for(const o in this._texturePool){const t=this._texturePool[o];if(t)for(let l=0;l<t.length;l++)t[l].destroy(!0)}this._texturePool={}}}const p=new x,a={name:"local-uniform-bit",vertex:{header:`

            struct LocalUniforms {
                uTransformMatrix:mat3x3<f32>,
                uColor:vec4<f32>,
                uRound:f32,
            }

            @group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
        `,main:`
            vColor *= localUniforms.uColor;
            modelMatrix *= localUniforms.uTransformMatrix;
        `,end:`
            if(localUniforms.uRound == 1)
            {
                vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
            }
        `}},b={...a,vertex:{...a.vertex,header:a.vertex.header.replace("group(1)","group(2)")}},_={name:"local-uniform-bit",vertex:{header:`

            uniform mat3 uTransformMatrix;
            uniform vec4 uColor;
            uniform float uRound;
        `,main:`
            vColor *= uColor;
            modelMatrix = uTransformMatrix;
        `,end:`
            if(uRound == 1.)
            {
                gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
            }
        `}};class g{constructor(){this.batcherName="default",this.attributeSize=4,this.indexSize=6,this.packAsQuad=!0,this.roundPixels=0,this._attributeStart=0,this._batcher=null,this._batch=null}get blendMode(){return this.renderable.groupBlendMode}get color(){return this.renderable.groupColorAlpha}reset(){this.renderable=null,this.texture=null,this._batcher=null,this._batch=null,this.bounds=null}}function P(i,e,o){const t=(i>>24&255)/255;e[o++]=(i&255)/255*t,e[o++]=(i>>8&255)/255*t,e[o++]=(i>>16&255)/255*t,e[o++]=t}export{g as B,p as T,a,_ as b,P as c,b as l};
