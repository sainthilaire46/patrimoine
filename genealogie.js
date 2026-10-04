/* ==========================================================================
   GÉNÉALOGIE - JAVASCRIPT LOGIC
   Search, Filters, Lineage Modals, Lightbox & Contact
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Data Store for Families ---
  const familiesData = {
    guillemant: {
      name: "Famille GUILLEMANT",
      variants: "Guilhem, Guilhament, Guilleman",
      period: "1685 — 1920",
      origin: "Saint-Hilaire, Figeac, Cahors (Lot)",
      professions: "Meuniers du moulin communal, Maîtres de forges, Notaires",
      ancestor: "Jean GUILHEM (né vers 1662, décédé le 14 mai 1732)",
      biography: "Implantée dès la fin du XVIIe siècle à Saint-Hilaire, la branche Guillemant a exploité le moulin à eau sur le ruisseau local pendant près de quatre générations avant d'essaimer vers les études notariales de Figeac et les bourgs voisins.",
      tree: [
        {
          level: "Génération I (Aïeux)",
          members: [
            { name: "Jean GUILHEM", dates: "1662 – 1732", role: "Meunier à Saint-Hilaire" },
            { name: "Marguerite DELPECH", dates: "1668 – 1741", role: "Épouse" }
          ]
        },
        {
          level: "Génération II",
          members: [
            { name: "Pierre GUILHEMANT", dates: "1701 – 1774", role: "Maître meunier & Syndic" },
            { name: "Toinette ROQUES", dates: "1708 – 1782", role: "Originaire de Figeac" }
          ]
        },
        {
          level: "Génération III",
          members: [
            { name: "Antoine GUILLEMANT", dates: "1742 – 1815", role: "Notaire public & Greffier" },
            { name: "Marie-Anne DUBOIS", dates: "1749 – 1823", role: "Fille de vigneron" }
          ]
        }
      ],
      notableArchives: "Contrat de mariage passé le 8 janvier 1735 devant Me Pons, notaire royal à Saint-Hilaire."
    },
    dubois: {
      name: "Famille DUBOIS",
      variants: "Delbos, Dalbosc, Du Boys",
      period: "1720 — 1945",
      origin: "Saint-Hilaire, Vers, Vallée du Lot",
      professions: "Vignerons, Tonneliers, Gardes-champêtres",
      ancestor: "Guillaume DELBOS (né en 1698)",
      biography: "Les Dubois (originellement Delbos dans les registres d'ancien régime) cultivaient les terrasses viticoles dominant la vallée. Leurs vignes de Malbec ont alimenté le commerce fluvial sur le Lot jusqu'à l'épisode du phylloxéra à la fin du XIXe siècle.",
      tree: [
        {
          level: "Génération I",
          members: [
            { name: "Guillaume DELBOS", dates: "1698 – 1762", role: "Vigneron à Vers" },
            { name: "Jeanne VIALA", dates: "1705 – 1779", role: "Ménagère" }
          ]
        },
        {
          level: "Génération II",
          members: [
            { name: "Jean-Pierre DUBOIS", dates: "1738 – 1804", role: "Vigneron & Tonnelier" },
            { name: "Catherine COUDERC", dates: "1744 – 1812", role: "Saint-Hilaire" }
          ]
        },
        {
          level: "Génération III",
          members: [
            { name: "François DUBOIS", dates: "1778 – 1851", role: "Garde-champêtre de la commune" },
            { name: "Anne POUJOL", dates: "1782 – 1860", role: "Fileuse de laine" }
          ]
        }
      ],
      notableArchives: "Déclaration des récoltes de vin de l'an VII (Archives de la mairie)."
    },
    maraval: {
      name: "Famille MARAVAL",
      variants: "Maravals, Maravalh, De Maraval",
      period: "1640 — 1880",
      origin: "Saint-Hilaire, Gramat, Rocamadour",
      professions: "Marchands drapiers, Consul de la communauté",
      ancestor: "Arnaud de MARAVAL (mentionné en 1642)",
      biography: "Famille influente du Quercy commerçant des laines et toiles de chanvre entre Saint-Hilaire et les foires de Gramat. Plusieurs de ses membres ont exercé la charge de consuls et consigné les délibérations de la communauté villageoise.",
      tree: [
        {
          level: "Génération I",
          members: [
            { name: "Arnaud de MARAVAL", dates: "ca 1620 – 1684", role: "Marchand drapier" },
            { name: "Françoise de LABICHE", dates: "1625 – 1690", role: "Origine Gramat" }
          ]
        },
        {
          level: "Génération II",
          members: [
            { name: "Géraud MARAVAL", dates: "1655 – 1729", role: "Consul de Saint-Hilaire" },
            { name: "Peyronne BONHOMME", dates: "1661 – 1735", role: "Saint-Hilaire" }
          ]
        },
        {
          level: "Génération III",
          members: [
            { name: "Bernard MARAVAL", dates: "1694 – 1768", role: "Maître tanneur" },
            { name: "Marie CALMETTES", dates: "1702 – 1777", role: "Figeac" }
          ]
        }
      ],
      notableArchives: "Livre d'estime et terriers de 1688 conservés aux Archives Départementales du Lot."
    },
    lacam: {
      name: "Famille LACAM",
      variants: "Lacambra, Delacam, Lacamp",
      period: "1750 — 1960",
      origin: "Saint-Hilaire, Cajarc",
      professions: "Maréchaux-ferrants, Forgerons, Charpentiers",
      ancestor: "Mathieu LACAM (1725 – 1792)",
      biography: "Véritables piliers de la vie artisanale locale, l'atelier de forge des Lacam résonnait sur la place du village, ferrant bêtes de trait et fabriquant charrues et outils aratoires pour tous les cultivateurs du plateau.",
      tree: [
        {
          level: "Génération I",
          members: [
            { name: "Mathieu LACAM", dates: "1725 – 1792", role: "Maréchal à la forge haute" },
            { name: "Rose MOLINIER", dates: "1731 – 1803", role: "Saint-Hilaire" }
          ]
        },
        {
          level: "Génération II",
          members: [
            { name: "Jacques LACAM", dates: "1765 – 1838", role: "Forgeron & Serrurier" },
            { name: "Élisabeth FABRE", dates: "1772 – 1845", role: "Cajarc" }
          ]
        },
        {
          level: "Génération III",
          members: [
            { name: "Henri LACAM", dates: "1805 – 1883", role: "Charron & Forgeron communal" },
            { name: "Victoire COSTES", dates: "1812 – 1891", role: "Saint-Hilaire" }
          ]
        }
      ],
      notableArchives: "Enregistrement des patentes et registre des forges de 1820."
    }
  };

  // --- Search & Filters ---
  const searchInput = document.getElementById('searchPatronyme');
  const chipButtons = document.querySelectorAll('.chip-btn');
  const familyCards = document.querySelectorAll('.family-card');
  const countIndicator = document.getElementById('countIndicator');

  let activeCentury = 'all';

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    familyCards.forEach(card => {
      const name = card.getAttribute('data-name') || '';
      const centuries = (card.getAttribute('data-century') || '').split(' ');
      const textContent = card.innerText.toLowerCase();

      const matchesSearch = query === '' || textContent.includes(query) || name.includes(query);
      const matchesCentury = activeCentury === 'all' || centuries.includes(activeCentury);

      if (matchesSearch && matchesCentury) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (countIndicator) {
      countIndicator.innerText = `${visibleCount} famille${visibleCount > 1 ? 's' : ''} trouvée${visibleCount > 1 ? 's' : ''}`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }

  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      chipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCentury = btn.getAttribute('data-century');
      filterCards();
    });
  });

  // --- Family Detail Modal ---
  const familyModal = document.getElementById('familyModal');
  const modalFamilyName = document.getElementById('modalFamilyName');
  const modalFamilyContent = document.getElementById('modalFamilyContent');
  const closeButtons = document.querySelectorAll('.modal-close-btn');

  function openFamilyModal(familyId) {
    const data = familiesData[familyId];
    if (!data) return;

    modalFamilyName.innerText = `${data.name} (Exemple fictif)`;

    // Render HTML inside modal
    let treeHTML = '';
    data.tree.forEach((gen, idx) => {
      let membersHTML = gen.members.map(m => `
        <div class="tree-node">
          <strong>${m.name}</strong>
          <span>${m.dates}</span>
          <div style="font-size: 0.8rem; color: #57534e; margin-top: 3px;">${m.role}</div>
        </div>
      `).join('');

      treeHTML += `
        <div class="tree-level">
          <div class="tree-level-title">${gen.level}</div>
          <div class="tree-branch">${membersHTML}</div>
        </div>
        ${idx < data.tree.length - 1 ? '<div class="tree-connector">↓</div>' : ''}
      `;
    });

    modalFamilyContent.innerHTML = `
      <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 10px 14px; margin-bottom: 16px; font-size: 0.85rem; color: #92400e; display: flex; align-items: center; gap: 8px;">
        <span>🚧</span> <span><strong>Fiche d'exemple :</strong> Les personnes, dates et actes ci-dessous sont fictifs et affichés à titre de maquette.</span>
      </div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px;">
        <span class="era-badge">Période : ${data.period}</span>
        <span class="era-badge" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">Berceau : ${data.origin}</span>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Variantes patronymiques</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary);">${data.variants}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 8px;">Histoire & Métiers de la lignée</h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; background: #faf8f5; padding: 14px 18px; border-radius: 8px; border-left: 3px solid #b45309;">
          ${data.biography}
        </p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 12px;">Arbre d'ascendance synthétique</h4>
        <div class="tree-container">
          ${treeHTML}
        </div>
      </div>

      <div style="background: #f1f5f9; padding: 14px 18px; border-radius: 8px; font-size: 0.88rem; color: #334155;">
        <strong>Document d'archive remarquable :</strong> ${data.notableArchives}
      </div>
    `;

    familyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.btn-open-lineage').forEach(btn => {
    btn.addEventListener('click', () => {
      const familyId = btn.getAttribute('data-family');
      openFamilyModal(familyId);
    });
  });

  // --- Archive Lightbox Modal ---
  const archiveModal = document.getElementById('archiveModal');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTranscription = document.getElementById('lightboxTranscription');
  const lightboxCote = document.getElementById('lightboxCote');

  document.querySelectorAll('.archive-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const imgSrc = card.getAttribute('data-img');
      const cote = card.getAttribute('data-cote');
      const transcription = card.getAttribute('data-transcription');

      lightboxTitle.innerText = title;
      lightboxImage.src = imgSrc;
      lightboxImage.alt = title;
      lightboxCote.innerText = cote ? `Référence : ${cote}` : '';
      lightboxTranscription.innerHTML = transcription || 'Aucune transcription disponible pour ce document.';

      archiveModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modals
  function closeAllModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  closeButtons.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // --- Cousinage Contact Form Submission ---
  const contactForm = document.getElementById('cousinsForm');
  const toastNotice = document.getElementById('toastNotice');

  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-text').innerText = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const patronyme = document.getElementById('cousinPatronyme').value;
      contactForm.reset();
      showToast(`Merci ! Votre demande concernant la famille "${patronyme}" a bien été enregistrée. Nous vous recontacterons très vite.`);
    });
  }
});
