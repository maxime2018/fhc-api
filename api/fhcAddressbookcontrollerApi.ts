/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class fhcAddressbookcontrollerApi {
  host: string
  headers: Array<XHR.Header>
  constructor(host: string, headers: any) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  getHcpByNihiiUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    nihii: string,
    language?: string
  ): Promise<models.HealthcareParty | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/hcp/nihii/{nihii}".replace("{nihii}", nihii + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.HealthcareParty(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getHcpBySsinUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ssin: string,
    quality?: string,
    language?: string
  ): Promise<models.HealthcareParty | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/hcp/ssin/{ssin}".replace("{ssin}", ssin + "") +
      "?ts=" +
      new Date().getTime() +
      (quality ? "&quality=" + quality : "") +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.HealthcareParty(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getOrgByCbeUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    cbe: string,
    language?: string
  ): Promise<models.HealthcareParty | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/org/cbe/{cbe}".replace("{cbe}", cbe + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.HealthcareParty(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getOrgByEhpUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    ehp: string,
    language?: string
  ): Promise<models.HealthcareParty | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/org/ehp/{ehp}".replace("{ehp}", ehp + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.HealthcareParty(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getOrgByNihiiUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    nihii: string,
    language?: string
  ): Promise<models.HealthcareParty | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/org/nihii/{nihii}".replace("{nihii}", nihii + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.HealthcareParty(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  searchHcpUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    lastName: string,
    firstName?: string,
    type?: string
  ): Promise<Array<models.HealthcareParty> | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/search/hcp/{lastName}".replace("{lastName}", lastName + "") +
      "?ts=" +
      new Date().getTime() +
      (firstName ? "&firstName=" + firstName : "") +
      (type ? "&type=" + type : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.HealthcareParty(it)))
      .catch(err => this.handleError(err))
  }
  searchOrgUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    name: string,
    type?: string
  ): Promise<Array<models.HealthcareParty> | any> {
    let _body = null

    const _url =
      this.host +
      "/ab/search/org/{name}".replace("{name}", name + "") +
      "?ts=" +
      new Date().getTime() +
      (type ? "&type=" + type : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.HealthcareParty(it)))
      .catch(err => this.handleError(err))
  }
}
