import React from "react";
import './modal.scss'
import iconClose from'../../assets/🦆 icon _close_.png'

function Modal ({setIsOpen}) {

    return (
        <>
        <section className="modal__container">
            <div className="modal__container-text">
                < img src={iconClose} alt='' className="BtnModalClose" onClick={() => setIsOpen(!{setIsOpen})} />
                <p>1 - Édition du site</p>
<span>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet https://studentsjj.github.io/my-website/ l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi:

Propriétaire du site : Bertaudeau Stéphanie - Contact : contactform.studentsjj@gmail.com 

Directeur de la publication : Bertaudeau Stéphanie - Contact : contactform.studentsjj@gmail.com.

Hébergeur : GitHub INC, 88 colin p kelly junior street 94107 San Francisco, united states 

Délégué à la protection des données : Bertaudeau Stéphanie -

Autres contributeurs : icône : Freepik.com image : OpenClassrooms, Bertaudeau Stéphanie.</span>

<p>2 - Propriété intellectuelle et contrefaçons.</p>
<span>Bertaudeau Stéphanie est propriétaire des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Bertaudeau Stéphanie.

Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</span>

<p>3 - Limitations de responsabilité.</p>
<span>Bertaudeau Stéphanie ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://studentsjj.github.io/my-website/.

Bertaudeau Stéphanie décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur https://studentsjj.github.io/my-website/.

Bertaudeau Stéphanie s’engage à sécuriser au mieux le site https://studentsjj.github.io/my-website/, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.

Des espaces interactifs (espace contact ou commentaires) sont à la disposition des utilisateurs. Bertaudeau Stéphanie se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données.

Le cas échéant, Bertaudeau Stéphanie se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie …).</span>

<p>4 - CNIL et gestion des données personnelles.</p>
<span>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site https://studentsjj.github.io/my-website/ dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre Délégué à la Protection des Données : Bertaudeau Stéphanie, contactform.studentsjj@gmail.com.

Pour plus d'informations sur la façon dont nous traitons vos données (type de données, finalité, destinataire...), lisez notre politique de confidentialité.</span>

<p>5 - Liens hypertextes et cookies</p>
<span>Le site https://studentsjj.github.io/my-website/ contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers https://studentsjj.github.io/my-website/.

La navigation sur le site https://studentsjj.github.io/my-website/ est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur.

Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.

Vous avez la possibilité d’accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.

Les cookies sont enregistrés pour une durée maximale de 6 mois.

Pour plus d'informations sur la façon dont nous faisons usage des cookies, lisez notre https://github.com/studentsjj/my-website. </span>

<p>6 - Droit applicable et attribution de juridiction.</p>
<span>Tout litige en relation avec l’utilisation du site https://studentsjj.github.io/my-website/ est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Angoulême.</span>
</div>
</section>
</>
)
}
 export default Modal;


