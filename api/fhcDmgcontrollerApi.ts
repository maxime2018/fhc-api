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

export class fhcDmgcontrollerApi {
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

  confirmAcksUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    dmgTacks: Array<models.DmgAcknowledge>
  ): Promise<boolean | any> {
    let _body = null
    _body = dmgTacks

    const _url =
      this.host +
      "/gmd/confirm/acks" +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }
  confirmDmgMessagesUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    dmgMessages: Array<models.DmgMessage>
  ): Promise<boolean | any> {
    let _body = null
    _body = dmgMessages

    const _url =
      this.host +
      "/gmd/confirm/messages" +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }
  consultDmgUsingGET(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    patientSsin?: string,
    patientGender?: string,
    oa?: string,
    regNrWithMut?: string,
    requestDate?: number
  ): Promise<models.DmgConsultation | any> {
    let _body = null

    const _url =
      this.host +
      "/gmd" +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientSsin ? "&patientSsin=" + patientSsin : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (oa ? "&oa=" + oa : "") +
      (regNrWithMut ? "&regNrWithMut=" + regNrWithMut : "") +
      (requestDate ? "&requestDate=" + requestDate : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("GET", _url, headers, _body)
      .then(doc => new models.DmgConsultation(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getDmgMessagesUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    oa: string,
    messageNames: Array<string>
  ): Promise<Array<models.DmgMessage> | any> {
    let _body = null
    _body = messageNames

    const _url =
      this.host +
      "/gmd/messages" +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (oa ? "&oa=" + oa : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.DmgMessage(it)))
      .catch(err => this.handleError(err))
  }
  notifyDmgUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    nomenclature: string,
    patientSsin?: string,
    oa?: string,
    regNrWithMut?: string,
    patientFirstName?: string,
    patientLastName?: string,
    patientGender?: string,
    requestDate?: number
  ): Promise<models.DmgNotification | any> {
    let _body = null

    const _url =
      this.host +
      "/gmd/notify/{nomenclature}".replace("{nomenclature}", nomenclature + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (patientSsin ? "&patientSsin=" + patientSsin : "") +
      (oa ? "&oa=" + oa : "") +
      (regNrWithMut ? "&regNrWithMut=" + regNrWithMut : "") +
      (patientFirstName ? "&patientFirstName=" + patientFirstName : "") +
      (patientLastName ? "&patientLastName=" + patientLastName : "") +
      (patientGender ? "&patientGender=" + patientGender : "") +
      (requestDate ? "&requestDate=" + requestDate : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.DmgNotification(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  postDmgsListRequestUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    oa?: string,
    requestDate?: number
  ): Promise<boolean | any> {
    let _body = null

    const _url =
      this.host +
      "/gmd/reqlist" +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (oa ? "&oa=" + oa : "") +
      (requestDate ? "&requestDate=" + requestDate : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => JSON.parse(JSON.stringify(doc.body)))
      .catch(err => this.handleError(err))
  }
  registerDoctorUsingPOST(
    xFHCKeystoreId: string,
    xFHCTokenId: string,
    xFHCPassPhrase: string,
    hcpNihii: string,
    hcpSsin: string,
    hcpFirstName: string,
    hcpLastName: string,
    oa: string,
    bic: string,
    iban: string
  ): Promise<models.DmgRegistration | any> {
    let _body = null

    const _url =
      this.host +
      "/gmd/register/{oa}".replace("{oa}", oa + "") +
      "?ts=" +
      new Date().getTime() +
      (hcpNihii ? "&hcpNihii=" + hcpNihii : "") +
      (hcpSsin ? "&hcpSsin=" + hcpSsin : "") +
      (hcpFirstName ? "&hcpFirstName=" + hcpFirstName : "") +
      (hcpLastName ? "&hcpLastName=" + hcpLastName : "") +
      (bic ? "&bic=" + bic : "") +
      (iban ? "&iban=" + iban : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    headers = headers.concat(new XHR.Header("X-FHC-keystoreId", xFHCKeystoreId))
    headers = headers.concat(new XHR.Header("X-FHC-tokenId", xFHCTokenId))
    headers = headers.concat(new XHR.Header("X-FHC-passPhrase", xFHCPassPhrase))
    return XHR.sendCommand("POST", _url, headers, _body)
      .then(doc => new models.DmgRegistration(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
